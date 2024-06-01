/etc/config/uhttpd
  config uhttpd 'main'
  option error_page '/cgi-bin/404'

/www/cgi-bin/404
----------------
#!/bin/sh
[ -e /tmp/404 ] && . /tmp/404
[ -z "$QUERY_STRING" ] && [ -z "${REQUEST_URI##*'?'*}" ] && QUERY_STRING=${REQUEST_URI#*'?'}
URI_PATH=`echo "$REQUEST_URI" | sed -r 's|\?.*$||'`

if [ "$URI_PATH" == "/r" ]; then
  echo -e "Status: 302 Redirect\nLocation: https://kamleong.github.io/$QUERY_STRING\n\n"
  exit 0
elif [ "$URI_PATH" == "/.m3u" ]; then
  echo -e "Status: 302 Redirect\nLocation: /cgi-bin/stream.m3u?$QUERY_STRING\n"
  exit 0
elif [ "$URI_PATH" == "/cgi-bin/stream.m3u" ]; then
  cp /www/cgi-bin/_stream.m3u /tmp/stream.m3u
  echo -e "Content-Type: text/plain\n\nplease reload/refresh"
  exit 0
fi

trnpstrm=`echo "$REQUEST_URI" | sed "s|^/cgi-bin/\(\S\+\.ts\)$|\1|" | grep -v "^/"`
[ -z "$trnpstrm" ] || {
  echo -e "Content-Type: video/mp2t\n"
  curl -s "https://live-xtra-sg1.global.ssl.fastly.net/live-hls/tonton3_720p/${trnpstrm}"
  exit
}

echo -e "Content-Type: text/plain\n\n404\n"
set
