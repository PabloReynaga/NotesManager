#!/bin/bash

gnome-terminal --tab -- bash -c "cd /home/pablo/Pablo-PC/programacion/NotesManager/frontend  ; npm run dev; exec bash"
gnome-terminal --tab -- bash -c "cd /home/pablo/Pablo-PC/programacion/NotesManager/backend ; npm run dev; exec bash"
gnome-terminal --tab -- bash -c "cd /home/pablo/Pablo-PC/programacion/NotesManager/backend ; docker-compose up; exec bash"