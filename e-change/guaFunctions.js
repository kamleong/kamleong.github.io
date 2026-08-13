/*
  All Rights Reserved
  Copyright (C) 1999,2010 Lai KamLeong
*/
  var guaVal2Seq = Array(
   2,24, 7,19,15,36,46,11,  16,51,40,54,62,55,32,34,
   8, 3,29,60,39,63,48, 5,  45,17,47,58,31,49,28,43,
  23,27, 4,41,52,22,18,26,  35,21,64,38,56,30,50,14,
  20,42,59,61,53,37,57, 9,  12,25, 6,10,33,13,44, 1
  );

  var guaSeq2Val = Array(
   63, 0,17,34,23,58, 2,16,  55,59, 7,56,61,47, 4, 8,
   25,38, 3,48,41,37,32, 1,  57,39,33,30,18,45,28,14,
   60,15,40, 5,53,43,20,10,  35,49,31,62,24, 6,26,22,
   29,46, 9,36,52,11,13,44,  54,27,50,19,51,12,21,42
  );

  var guaNames = Array(
   '01䷀乾Qian','02䷁坤Kun','03䷂屯Tun','04䷃蒙Meng','05䷄需Xu','06䷅訟Song','07䷆師Shi','08䷇比Bi',
   '09䷈小畜XiaoXu','10䷉履Lu','11䷊泰Tai','12䷋否Pi','13䷌同人TongRen','14䷍大有DaYou','15䷎謙Qian','16䷏豫Yu',
   '17䷐隨Sui','18䷑蠱Gu','19䷒臨Lin','20䷓觀Guan','21䷔噬嗑ShiHe','22䷕賁Bi','23䷖剝Bo','24䷗復Fu',
   '25䷘無妄WuWang','26䷙大畜DaXu','27䷚頤Yi','28䷛大過DaGuo','29䷜坎Kan','30䷝離Li','31䷞咸Xian','32䷟恆Heng',
   '33䷠遯Dun','34䷡大壯DaZhuang','35䷢晉Jin','36䷣明夷MingYi','37䷤家人JiaRen','38䷥睽Kui','39䷦蹇Jian','40䷧解Jie',
   '41䷨損Sun','42䷩益Yi','43䷪夬Jue','44䷫姤Hou','45䷬萃Cui','46䷭升Sheng','47䷮困Kun','48䷯井Jing',
   '49䷰革Ge','50䷱鼎Ding','51䷲震Zhen','52䷳艮Gen','53䷴漸Jian','54䷵歸妹GuiMei','55䷶丰Feng','56䷷旅Lu',
   '57䷸巽Xun','58䷹兌Dui','59䷺渙Huan','60䷻節Jie','61䷼中孚ZhongFu','62䷽小過XiaoGuo','63䷾既濟JiJi','64䷿未濟WeiJi'
  );

  function getGua(castOpt) {
    var guayao = new Array();
    var cast = new Array();
    for (var y=1; y<=6; y++) {
      guayao[y] = 0;
      if (castOpt=="simple") {
        //a simple random number [6,7,8,9] as implemented at http://afpc.asso.fr/wengu/wg/wengu.php?l=Yijing
        guayao[y] = Math.floor(6+4*Math.random());
      } else if (castOpt=="coins") {
        //casting 3 coins
        for (var c=1; c<=3; c++) {
          cast[c] = Math.round(Math.random()); // coin = (head,tail)
          guayao[y] += cast[c]+2;              // guayao[y] = (3,2)x3 = (9,6,7,8)
        }
      } else {
        //dividing yarrow stalks
        cast[0] = Math.round(15*Math.random());// yarrow = (0..15)
        switch (cast[0]) {
         case 0 : guayao[y] = 6;
          break;
         case 1 : case 9 : case 15 : guayao[y] = 9;
          break;
         default: guayao[y] = ( (cast[0] % 2 != 0) ? 7 : 8 );
          // 3,5,7,11,13 | 2,4,6,8,10,12,14
        }
      }
    }
    return guayao;
  }

  function ignore96(shu) {
    switch (shu) {
     case 7: case 8: return shu;   case 9: return 7;   case 6: return 8;
     default: return -1;
    }
  }

  function transform96(shu) {
    switch (shu) {
     case 7: case 8: return shu;   case 9: return 8;   case 6: return 7;
     default: return -1;
    }
  }

  function transGua(guayao, opt) {
    var result = new Array();
    switch (opt) {
      case "" : case "prj" : case undefined :
        for (var y=1; y<=6; y++) {
          result[y] = transform96(guayao[y]);
        }
        break;
      case "nuc" :
        for (var y=2; y<=4; y++) {
          result[y-1] = ignore96(guayao[y]);
        }
        for (var y=3; y<=5; y++) {
          result[y+1] = ignore96(guayao[y]);
        }
        break;
      case "cmp" :
        for (var y=1; y<=6; y++) {
          switch (guayao[y]) {
           case 7: case 9:
             result[y] = 8;
             break;
           case 6: case 8:
             result[y] = 7;
             break;
           default:
             result[y] = -1;
          }
        }
        break;
      case "rev" :
        for (var y=1; y<=6; y++) {
          result[7-y] = ignore96(guayao[y]);
        }
        break;
      case "inv" :
        for (var y=4; y<=6; y++) {
          result[y-3] = ignore96(guayao[y]);
        }
        for (var y=1; y<=3; y++) {
          result[y+3] = ignore96(guayao[y]);
        }
        break;
    }
    g_transOpt = opt;
    return result;
  }

  function binNum(shu) {
    switch (shu) {
     case 6: case 8: return 0;   case 7: case 9: return 1;
     default: return -1;
    }
  }

  function getGuaVal(guayao) {
    var binNumStr="";
    for (var y=6; y>=1; y--) {
      binNumStr += binNum(guayao[y]);
    }
    return parseInt(binNumStr, 2) ;
  }

  function getYaoArr(guaStr) {
    var yaoArr=new Array();
    var v, y=0;
    for (var i=0; i<guaStr.length; i++) {
      if (isNaN(guaStr.charAt(i))) continue;
      y++;
      v = parseInt(guaStr.charAt(i));
      switch (v) {
        case 7: case 8: case 9: case 6:
          yaoArr[y] = v;
          break;
        default:
          yaoArr[y] = ((v%2==0) ? 8 : 7);
      }
    }
    return yaoArr;
  }
