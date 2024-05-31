/etc/config/uhttpd
  config uhttpd 'main'
  option error_page '/cgi-bin/404'

/www/cgi-bin/404
----------------
#!/bin/sh

if [ "${REQUEST_URI}" == "/cgi-bin/stream.m3u" ]; then
  cp /www/cgi-bin/_stream.m3u /tmp/stream.m3u
  echo "Content-Type: text/plain"
  echo ""
  echo "please reload/refresh"
  exit 0
fi

trnpstrm=`echo "${REQUEST_URI}" | sed "s|^/cgi-bin/\(\S\+\.ts\)$|\1|" | grep -v "^/"`
[ -z "${trnpstrm}" ] || {
  echo "Content-Type: video/mp2t"
  echo ""
  curl -s "https://live-xtra-sg1.global.ssl.fastly.net/live-hls/tonton3_720p/${trnpstrm}"
  exit
}

echo "Content-Type: text/plain"
echo ""
set
