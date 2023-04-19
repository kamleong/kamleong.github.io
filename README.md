
Homepage URL: [https://kamleong.github.io](https://kamleong.github.io)

```
https://kamleong.github.io
```

## Table of contents

- ☵ [echange](#e-change)
- 📺 [iptv](#iptv)

## E-Change

I Ching evolved from an older system of divination in an ealier time in ancient China. In this older system, crack patterns on animal bones and turtle shell were observed after a certain degree of burning. Obtaining a reading was often complicated and the result was disputatious. A distinctive advancement was achieved when I Ching was born. The system of I Ching was form with the standardization of trigram and hexagram symbols. I Ching is not merely a system of divination. It induce lateral thinking. By studying I Ching, a person can build up his analytical power. It also stimulates a person to think positively.

## IPTV

### Main playlist

This is a custom playlist of live streaming from various TV, Radio & online channels
```
https://kamleong.github.io/iptv.m3u
```

And, below is the handy playlist with all categories compiled from https://github.com/iptv-org/iptv#grouped-by-category
```
https://kamleong.github.io/iptv-org.category.m3u
```

### Sample EPG

Below is a sample EPG (Electronic Programming Guide) in "JTV 3.x TV Program Data" format (ZIP containing PDT & NDX files) for general testing purpose.

```
https://kamleong.github.io/sample.epg.jtv.zip
```
<details>
<summary>details</summary>
<br>
- .pdt file always starts with string "JTV 3.x TV Program Data" followed by 3 bytes of hex values 0xA0. Then goes 2-byte program name length and program name itself (encoding is unknown, for Cyrillic win-1251 is used)
- .ndx file starts with 2-byte number (count of records) followed by 12-byte records: first 2 bytes always 0x00; next 8 bytes = program start time = windows FILETIME structure, i.e. 64bit integer representing windows time in milliseconds; last 2 bytes = offset in .pdt file to find program name.
Note: JTV format uses little endian. File format/specification reference: https://code.google.com/archive/p/xmltv2jtv/wikis/JTVFormat.wiki
</details>
