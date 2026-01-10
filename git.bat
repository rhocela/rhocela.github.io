@echo off
REM Add Git to PATH for this session
set PATH=C:\Program Files\Git\cmd;%PATH%

REM Run git commands
git %*
