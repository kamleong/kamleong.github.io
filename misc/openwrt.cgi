/etc/config/uhttpd
  config uhttpd 'main'
  option error_page '/cgi-bin/404'

/www/cgi-bin/404
----------------
#!/bin/sh
[ -z "$QUERY_STRING" ] && [ -z "${REQUEST_URI##*'?'*}" ] && QUERY_STRING=${REQUEST_URI#*'?'}
URI_PATH=`echo "$REQUEST_URI" | sed -r 's|\?.*$||'`

if [ "$URI_PATH" == "/r" ]; then
  echo "Status: 302 Redirect"
  echo "Location: https://kamleong.github.io/$QUERY_STRING"
  echo ""
  exit 0
elif [ "$URI_PATH" == "/.m3u" ]; then
  echo "Status: 302 Redirect"
  echo "Location: /cgi-bin/stream.m3u?$QUERY_STRING"
  echo ""
  exit 0
elif [ "$URI_PATH" == "/cgi-bin/stream.m3u" ]; then
  cp /www/cgi-bin/_stream.m3u /tmp/stream.m3u
  echo "Content-Type: text/plain"
  echo ""
  echo "please reload/refresh"
  exit 0
fi

trnpstrm=`echo "$REQUEST_URI" | sed "s|^/cgi-bin/\(\S\+\.ts\)$|\1|" | grep -v "^/"`
[ -z "${trnpstrm}" ] || {
  echo "Content-Type: video/mp2t"
  echo ""
  curl -s "https://live-xtra-sg1.global.ssl.fastly.net/live-hls/tonton3_720p/${trnpstrm}"
  exit
}

echo "Content-Type: text/plain"
echo ""
set
