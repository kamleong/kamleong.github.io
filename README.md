
Homepage URL: [https://kamleong.github.io](https://kamleong.github.io) <sub><br>[ first created on 2021-11-01T19:07:31.000+08:00 ]</sub>
```
https://kamleong.github.io
```
> [!WARNING]
> It was most unfortunate that this repository/homepage was taken down entirely in April 2026 as per the DMCA notice https://github.com/github/dmca/blob/master/2026/04/2026-04-22-astro-2.md without any per-warning. I have immediately submitted a DMCA counter notice after I was aware of that on 28th April. It took me a number of followups before I finally received an update on Aug 11, 2026 from GitHub Support and given me a last chance to update/cleanup this restored repository content.
> 
> Lessons learnt:
> - GitHub will simply take down the entire repository as long as some company/agency submitted a claim that something in the repository is violating DMCA or some other legal stuff. 😢
> - Including a streaming URL found via Google from publicly available sources in a file in your repository can still be considered as a violation even if the intention is merely for personal use and you are not aware that it had violated the DMCA. 😕
> - Unrelated contents in the repository which have nothing to do with DMCA can simply be taken down together due to your ignorance. ☹
> - The process of DMCA counter notice from a free account seems to be at a very low priority and will take months. 😥

## Table of contents

- ☵ [echange](#e-change)
- 📺 [iptv](#iptv)

## E-Change

I Ching evolved from an older system of divination in an ealier time in ancient China. In this older system, crack patterns on animal bones and turtle shell were observed after a certain degree of burning. Obtaining a reading was often complicated and the result was disputatious. A distinctive advancement was achieved when I Ching was born. The system of I Ching was form with the standardization of trigram and hexagram symbols. I Ching is not merely a system of divination. It induce lateral thinking. By studying I Ching, a person can build up his analytical power. It also stimulates a person to think positively.

## IPTV

### Main playlist

This is a custom playlist of live streaming from various TV, Radio & online channels <sub><br>[ first created in Q1/Q2 2023 ]</sub>
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
<li> .pdt file always starts with string "JTV 3.x TV Program Data" followed by 3 bytes of hex values 0xA0. Next, 2-byte program name length and program name itself (encoding is unknown, for Cyrillic win-1251 is used)
<li> .ndx file starts with 2-byte number (count of records) followed by 12-byte records: first 2 bytes always 0x00; next 8 bytes = program start time = windows FILETIME structure, i.e. 64bit integer representing windows time in milliseconds; last 2 bytes = offset in .pdt file to find program name.
<br>
Note: JTV format uses little endian. File format/specification reference: https://code.google.com/archive/p/xmltv2jtv/wikis/JTVFormat.wiki
</details>
