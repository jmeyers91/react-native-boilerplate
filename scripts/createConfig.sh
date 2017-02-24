#!/bin/bash

[ -f server/config/config.json ] || echo '{"production": false}' > server/config/config.json
