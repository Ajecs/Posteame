#!/bin/bash
set -e
curl -fsSL https://bun.sh/install | bash
export PATH="/opt/buildhome/.bun/bin:$PATH"
bun --version
bun install
<<<<<<< HEAD
bun --bun run build

# Permite ejecutar bun en netlify
=======
bun --bun run build
>>>>>>> 3d9d7734cce17023ea68d510486d880958c98a7e
