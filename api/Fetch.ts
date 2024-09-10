type RequestMethod = 'POST' | 'PUT' | 'GET' | 'DELETE';

declare global {
  interface Window {
    tool: {
      location: string;
      token: string;
      version: string;
    };
  }
}
const apiPath:string = import.meta.env.VITE_API_BASE_URL;


/*
export const fetchDataArray = async <T>(
  path: string,
  dataStore: Writable<T[]>,
  loadingStore?: Writable<boolean>
) => {
  if (loadingStore) {
    loadingStore.set(true);
  }
  dataStore.set([]);
  dataStore.set(await fetchJson<T[]>(path));
  if (loadingStore) {
    loadingStore.set(false);
  }
};
*/

export const fetchJson = <T>(
  relativePath: string,
  method: RequestMethod = 'GET',
  body: any = undefined
): Promise<T> => {
  return fetchInternal<T>(relativePath, method, body, (res) => res.json());
};

export const fetchString = (
  relativePath: string,
  method: RequestMethod = 'GET',
  body: any = undefined
): Promise<string> => {
  return fetchInternal<string>(relativePath, method, body, (res) => res.text());
};

export const fetchResponse = (
  relativePath: string,
  method: RequestMethod = 'GET',
  body: any = undefined
): Promise<Response> => {
  return fetchInternal<Response>(relativePath, method, body, (res) => res);
};

const fetchInternal = <T>(
  relativePath: string,
  method: RequestMethod,
  body: any,
  mapper: (res: Response) => T | Promise<T>
): Promise<T> => {
  console.log(apiPath + relativePath)
  return new Promise<T>((resolve, reject) => {
    fetch(apiPath + relativePath, {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        /*Authorization: `Bearer ${window.tool.token}`*/
      },
      body: body === undefined ? undefined : JSON.stringify(body)
    })
      .then((res) => {
        if (!res.ok) {
          res
            .text()
            .then(reject)
            .catch(() => {
              reject('Could not complete fetch');
            });
          return;
        }
        resolve(mapper(res));
      })
      .catch((e) => {
        console.error('Could not fetch', e);
        reject('Could not complete fetch');
      });
  });
};
