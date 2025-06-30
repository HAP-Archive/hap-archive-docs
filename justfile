alias b := build
alias bc := build-clean
alias c := clean
alias i := install
alias u := upgrade
alias r := run


default:
    @just --list


clean:
    @echo "{{BG_GREEN}}INFO:{{NORMAL}} Cleaning cache, node_modules, and other files."
    -rm -rf node_modules dist .cache public
    -rm -f package-lock.json yarn.lock pnpm-lock.yaml


install:
    @echo "{{BG_GREEN}}INFO:{{NORMAL}} Installing dependencies for HAP Archive, hold on tight!"
    npm install


build:
    @echo "{{BG_GREEN}}INFO:{{NORMAL}} Building HAP Archive, this might take a while."
    npm run build


build-clean: clean install
    @echo "{{BG_GREEN}}INFO:{{NORMAL}} Performing a full clean build of HAP Archive, this might take a while "
    npm run build


upgrade:
    @echo "{{BG_GREEN}}INFO:{{NORMAL}} Upgrading HAP Archive dependencies, please wait."
    ncu -u
    npm install

run:
    @echo "{{BG_GREEN}}INFO:{{NORMAL}} Running HAP Archive, hold on tight!"
    npm run build
