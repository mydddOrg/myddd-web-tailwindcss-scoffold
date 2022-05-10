#!/bin/sh
echo lingen0929 | sudo -S rm -rf /usr/share/nginx/taoofcoding-next 2>&1 > /dev/null
echo lingen0929 | sudo -S unzip -o /tmp/taoofcoding-next.zip -d /usr/share/nginx/taoofcoding-next 2>&1 > /dev/null