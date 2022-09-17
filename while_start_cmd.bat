@echo off
:startwhile
start cmd
choice /t 1 /d y /n >nul
goto startwhile