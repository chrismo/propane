function DropMachine(library) {
  if (undefined == library) {
    this.library = [
      // #isthatrain

      // nfl voice over guy outtakes
      [/(#ohshoot|oh shoot)/i, "https://dl.dropbox.com/s/ciswtj3owz17xry/nfl.films.oh.shoot.mp3"],
      [/(#meaculpa|mea culpa)/i, "https://dl.dropbox.com/s/s2xnjnue4twrem8/nfl.films.mea.culpa.mp3"],
      [/(#usob|\bsob\b)/i, "https://dl.dropbox.com/s/p7p97hwg1ndxzte/nfl.films.you.sobleep.mp3"],

      // deion
      [/#trabtree/i, "https://dl.dropbox.com/s/7xcm66h40ox0vxm/deion.michael.trabtree.mp3"],
      [/(#hello|^hello)/i, "https://dl.dropbox.com/s/i0lhpz2hqyb38ix/deion.hello.mp3"],
      [/#laugh/i, "https://dl.dropbox.com/s/47jkw4qaxesuhqz/deion.laugh.mp3"],
      [/#ohwhataday/i, "https://dl.dropbox.com/s/n21i4szu4wwcqnr/deion.oh.what.a.day.mp3"],
      [/#phone/i, "https://dl.dropbox.com/s/ch1izhow7gm0qg3/deion.oh.a.phone.1.is.ringing.mp3"],
      [/(#dontknow|what is that)/i, "https://dl.dropbox.com/s/afd2sevxva4mcnj/deiondontknow.wav"],
      [/(#thous|million|thousand|\d+k)/i, "https://dl.dropbox.com/s/hg605w0cgb6kxzs/deion1000.wav"],

      // airplane
      [/#jackingmeup/i, "https://dl.dropbox.com/s/d7bfr07iyr28eem/ap.jive.jacking.me.up.mp3"],
      [/(#hangloose|hang loose)/i, "https://dl.dropbox.com/s/b3xxhuziob35foq/ap.jive.just.hang.loose.mp3"],
      [/(#youknowwhattheysay|you know what they say)/i, "https://dl.dropbox.com/s/9pw2h5zwy37mkd5/ap.jive.you.know.what.they.say.mp3"],
      [/#nobrains/i, "https://dl.dropbox.com/s/utxzgky2i3obluw/ap.jive.got.no.brains.mp3"],
      [/#bigmomma/i, "https://dl.dropbox.com/s/m9h3dov1t59w3a6/ap.jive.big.momma.mp3"],
      [/#canthang/i, "https://dl.dropbox.com/s/lnvftnllbk9i397/ap.jive.cant.hang.mp3"],
      [/#cutmesomeslack/i, "https://dl.dropbox.com/s/yuve2zrmpkeju94/ap.jive.cut.me.some.slack.mp3"],
      [/(#ispeakjive|jive)/i, "https://dl.dropbox.com/s/xxa078binp2w9xh/ap.jive.i.speak.jive.mp3"],
      [/surely/i, "https://dl.dropbox.com/s/09arfb7of2zu9qy/ap.surely.mp3"],

      // gijoe
      [/wth/i, "https://dl.dropbox.com/s/c9fob2ycdvfzmzs/gipsa.bm.ehhhh.what.the.hell.mp3"],
      [/#go/i, "https://dl.dropbox.com/s/rzita4po56g9p4w/gipsa.bm.go.mp3"],
      [/(#bodymassage|massage)/i, "https://dl.dropbox.com/s/3a3qfizvib17dro/gipsa.bm.who.wants.a.body.massage.mp3"],
      [/(#hellno|hell no)/i, "https://dl.dropbox.com/s/9a018kotphwboz0/gipsa.compy.hell.no.whats.up.dog.mp3"],
      [/#idontknow/i, "https://dl.dropbox.com/s/nh6334poddfqqeh/gipsa.compy.i.dont.know.much.about.computers.mp3"],
      [/#stopdown/i, "https://dl.dropbox.com/s/3ezu7fzl0amkme5/gipsa.compy.stop.all.downloading.mp3"],
      [/#smellgood/i, "https://dl.dropbox.com/s/g1miu3nu1j2zrvd/gipsa.pcs.my.god.smelled.good.mp3"],
      [/#pcs/i, "https://dl.dropbox.com/s/klmzj0j56sm011s/gipsa.pcs.pork.chop.sandwiches.mp3"],
      [/#yeahdo/i, "https://dl.dropbox.com/s/8ihum9ulgcjeo3q/gipsa.pcs.yeah.do.mp3"],
      [/#younotcookin/i, "https://dl.dropbox.com/s/25cylv37aagvqgw/gipsa.pcs.you.not.cooking.mp3"],

      // napoleon dynamite
      [/#lucky/i, "https://dl.dropbox.com/s/lkmsbrb61th41ep/nap.lucky.mp3"],
      [/idiot/i, ["https://dl.dropbox.com/s/num2xiri6z3yrot/nap.Freakin.Idiot.mp3", "https://dl.dropbox.com/s/utxzgky2i3obluw/ap.jive.got.no.brains.mp3"]],
      [/#mountain/i, "https://dl.dropbox.com/s/9s9wt7tztyhc6o2/nap.themmountains.mp3"],
      [/college/i, "https://dl.dropbox.com/s/3k9nssr8irkeduy/nap.your.mom.goes.to.college.mp3"],

      // misc
      [/#snoopylaf/i, "https://dl.dropbox.com/s/d9rbzlhb00ems07/snooplaf.wav"],
      [/#binladen/i, "https://dl.dropbox.com/s/1cubsnsrekgk97r/Thanks_A_Lot%2C_Bin_Laden%21_-_.mp3"],
      [/#whahappen/i, "https://dl.dropbox.com/s/mxyhtpga5tj7n1l/hwh.hey.wha.happen.mp3"],
      [/(#badthings|bad things)/i, "https://dl.dropbox.com/s/x1y09c430wsj2s6/Latarian_Fun_To_Do_Bad_Things_-_.mp3"],
      [/#cigs/i, "https://dl.dropbox.com/s/86zft7pfuror25y/Latarian_Smokes_Wif_Cigarettes_-_.mp3"],
      [/#die/i, "https://dl.dropbox.com/s/e6h8ut56og70pog/Die%21_-_.mp3"],
      [/#nobs/i, "https://dl.dropbox.com/s/o5m0ny2kd49i3wj/Don%27t_Need_Your_BS%21%21%21_-_.mp3"],
      [/b[ie]+ber/i, "https://dl.dropbox.com/s/mw8cpr6nrv8mmxm/beiber.sobleep.mp3"],
      [/#zackly/i, "https://dl.dropbox.com/s/1s2qs9aa38w78r1/emmitt.h.zackly.mp3"],
      [/#poopoo/i, "https://dl.dropbox.com/s/ku3p4aywjirv63q/emmitt-d.poopoo2.mp3"],
      [/#flyingmonkey/i, "https://dl.dropbox.com/s/rxe3mal9v1v2tat/flying.monkey.what.is.he.going.to.say.mp3"],
      [/no.?sense/i, "https://dl.dropbox.com/s/zhcw7c66i97hcq3/obro.thatdontmakenosense.mp3"],
      [/\byolo\b/i, "https://dl.dropbox.com/s/133mtnwhh6epua7/yolo.mp3"],
      [/website/i, "https://dl.dropbox.com/s/jyksfd317yqmyr9/Between_Two_Ferns_w__Jon_Hamm_Do_You_Like_Websites_-_Galifianakis.mp3"],
      [/(#shutup|shut up)/i, ["https://dl.dropbox.com/s/cdfzrnyn3zasizp/sanford.shut.up.dummy.mp3", "https://dl.dropbox.com/s/qnoryv45y7gfgv6/bullw.boris.shutup.mp3"]],
      [/#vickit/i, "https://dl.dropbox.com/s/x49nmtd5gk4q6fz/vick.snap.mp3"],
      [/#markthat/i, "https://dl.dropbox.com/s/9qq94gnwles3chw/Between_Two_Ferns_w__Jon_Hamm_Mark_That_Under..._%28_-_Galifianakis.mp3"],
      [/(blew|blow)/i, "https://dl.dropbox.com/s/v19wh2qltb99ke9/hes.blown.it.mp3"], // http://www.youtube.com/watch?feature=player_embedded&v=hYlKQd4pk7k
      [/opinion/i, "https://dl.dropbox.com/s/y77xr0kd4sgl8o7/bigl.your.opinion.mp3"],

      // simpsons
      [/old man/i, "https://dl.dropbox.com/s/cfutlb2gwtiwssc/granpa.simpson.hey.everybody.mp3"],
      [/dickety|kaiser|twenty/i, "https://dl.dropbox.com/s/fod6czcuopi14fu/granpa.simpson.the.kaiser.mp3"],
      [/#onion|fashion/i, "https://dl.dropbox.com/s/v738k8ip157hrxe/granpa.simpson.onion.belt.mp3"],

      // old spice
      [/#animals/i, "https://dl.dropbox.com/s/6m61cwbfyvfgtyz/animals.mp3"],
      [/#boring/i, "https://dl.dropbox.com/s/25rdy8ykyfhfwh3/boring.mp3"],
      [/#dummy/i, "https://dl.dropbox.com/s/ah3najbgs1gvskw/come.on.dummy.mp3"],
      [/#dangerzone/i, "https://dl.dropbox.com/s/c3s2byx108nqk8d/danger.zone.mp3"],
      [/#HA/, "https://dl.dropbox.com/s/uon7z8n4iib6hit/HA.mp3"],
      [/#weontheinternet/i, "https://dl.dropbox.com/s/6a1wxj6bx9cka2p/we.on.the.internet.mp3"],
      [/#playorgetout/i, "https://dl.dropbox.com/s/7uzh8lb9ze6vd1c/play.or.get.out.mp3"],
      [/#press/i, "https://dl.dropbox.com/s/u1ommm7pb0pxske/press.keyboard.keys.mp3"],
      [/#sausages/i, "https://dl.dropbox.com/s/aw1be1g8cmmh71y/sausages.mp3"],
      [/#wat/i, "https://dl.dropbox.com/s/00xis65y9jpj6rb/wat.mp3"],

      // princess bride
      [/(#thatword|that word)/i, "https://dl.dropbox.com/s/0gqo74p78856dvf/thatword.mp3"],
      [/\binconc..vable\b/i, ["https://dl.dropbox.com/s/a0yu8dah8f5zetj/inconceivable.mp3", "https://dl.dropbox.com/s/a0yu8dah8f5zetj/inconceivable.mp3", "https://dl.dropbox.com/s/0gqo74p78856dvf/thatword.mp3"]],
      [/(#sumup|sum up)/i, "https://dl.dropbox.com/s/3j0oxph6oh30tft/sumup.mp3"],

      // much ado about nothing

      // http://www.youtube.com/watch?v=82dYxF3sA8o - i'm an arse
      [/#youtakepleasure/i, "https://dl.dropbox.com/s/p50br4sdj6wlvzb/maan.you.take.pleasure.in.msg.mp3"],
      [/#youhavenostomach/i, "https://dl.dropbox.com/s/y2qur0c73telhy7/maan.you.have.no.stomach.mp3"],
      [/#yea/i, "https://dl.dropbox.com/s/jsd09zhhcvrudy7/maan.yea.mp3"],
      // [/#againstmywill/i, "https://dl.dropbox.com/s/6a9n5q7vjisjfmd/maan.she.against.my.will.mp3"],
      [/#thankyouforpain/i, "https://dl.dropbox.com/s/uwa9ysqi69ynxra/maan.i.thank.you.for.your.pains.mp3"],
      [/#againstmywill/i, "https://dl.dropbox.com/s/8rg26yjr3zfq7z8/maan.he.against.my.will.mp3"],
      [/#ha/, "https://dl.dropbox.com/s/acpwb3l6x3vvva2/maan.ha.mp3"],
      [/#fareyouwell/i, "https://dl.dropbox.com/s/d2py2u35507t32e/maan.fare.you.well.mp3"],
      [/#doublemeaning/i, "https://dl.dropbox.com/s/g6y0dqq81kpkcb6/maan.double.meaning.mp3"],
      [/#ahaha/i, "https://dl.dropbox.com/s/l0tk13ldfvpolrh/maan.ahaha.mp3"],

      // bullwinkle
      [/#besick/i, "https://dl.dropbox.com/s/4g07wg4y41oujah/bullw.besick.mp3"],
      [/impossible/i, "https://dl.dropbox.com/s/65absxigxv5su28/bullw.boris.impossible.mp3"],
      [/#curses/i, "https://dl.dropbox.com/s/vj7ct8etrpz6n2x/bullw.curses2.mp3"],
      [/#hooboy/i, "https://dl.dropbox.com/s/7z6tr1k93sokcbx/bullw.hooboy.mp3"],
      [/keen/i, "https://dl.dropbox.com/s/vpbop1kq50wnrgz/bullw.keenidea.mp3"],
      [/(#knowitall|know it all)/i, "https://dl.dropbox.com/s/6lrp47mpzogcuyw/bullw.knowall.mp3"],
      [/obviously/i, "https://dl.dropbox.com/s/07b2oxoir0avy22/bullw.obviously.mp3"],
      [/(#neverworks|never works)/i, "https://dl.dropbox.com/s/zl692ugzfv3e4s6/bullw.but.that.trick.never.works.mp3"],

      // star wars
      [/impressive/i, "https://dl.dropbox.com/s/dw5pexa9yxfr65e/vader.impressive.mp3"]
    ];
  } else {
    this.library = library;
  }

}

DropMachine.prototype = {
  matchMessage:function (messages) {
    var matchedUrls = [];
    for (var i = 0; i < this.library.length; i++) {
      for (var j = 0; j < messages.length; j++) {
        var ary = this.library[i];
        var regex = ary[0];
        var urls = [ary[1]].flatten();
        var url = urls[0];
        var message = messages[j];
        if (message.bodyElement().innerText.match(regex)) {
          // rotate lists of urls
          urls.shift();
          urls.push(url);
          this.library[i][1] = urls.clone();
          matchedUrls.push(url);
        }
      }
    }
    return matchedUrls;
  },

  playMatches:function (messages) {
    new AudioPlayer(this.matchMessage(messages)).playAll();
  }
};

function AudioPlayer(urls) {
  this.urls = [urls].flatten();
  this.audio = new Audio();
}

AudioPlayer.prototype = {
  playAll:function () {
    if ((this.audio.ended) || (this.audio.src == "")) {
      var nextUrl = this.urls.shift();
      if (nextUrl != undefined) {
        this.audio.src = nextUrl;
        this.audio.play();
        setTimeout(this.playAll.bind(this), 50);
      }
    } else {
      setTimeout(this.playAll.bind(this), 50);
    }
  }
};

Campfire.DropMachine = Class.create({
  initialize:function (chat) {
    this.chat = chat;
    this.dropMachine = new DropMachine();
  },

  onMessagesInserted:function (messages) {
    this.dropMachine.playMatches(messages);
  }
});

Campfire.Responders.push("DropMachine");
window.chat.installPropaneResponder("DropMachine", "dropmachine");