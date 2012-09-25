function DropMachine(library) {
  if (undefined == library) {
    this.library = [
      // #isthatrain

      // nfl voice over guy outtakes
      [/#ohshoot/i, "https://dl.dropbox.com/s/ciswtj3owz17xry/nfl.films.oh.shoot.mp3"],
      [/#meaculpa/i, "https://dl.dropbox.com/s/s2xnjnue4twrem8/nfl.films.mea.culpa.mp3"],
      [/#usob/i, "https://dl.dropbox.com/s/p7p97hwg1ndxzte/nfl.films.you.sobleep.mp3"],

      // deion
      [/#trabtree/i, "https://dl.dropbox.com/s/7xcm66h40ox0vxm/deion.michael.trabtree.mp3"],
      [/#hello/i, "https://dl.dropbox.com/s/i0lhpz2hqyb38ix/deion.hello.mp3"],
      [/#laugh/i, "https://dl.dropbox.com/s/47jkw4qaxesuhqz/deion.laugh.mp3"],
      [/#ohwhataday/i, "https://dl.dropbox.com/s/n21i4szu4wwcqnr/deion.oh.what.a.day.mp3"],
      [/#phone/i, "https://dl.dropbox.com/s/ch1izhow7gm0qg3/deion.oh.a.phone.1.is.ringing.mp3"],

      // airplane
      [/#jackingmeup/i, "https://dl.dropbox.com/s/d7bfr07iyr28eem/ap.jive.jacking.me.up.mp3"],
      [/#hangloose/i, "https://dl.dropbox.com/s/b3xxhuziob35foq/ap.jive.just.hang.loose.mp3"],
      [/#youknowwhattheysay/i, "https://dl.dropbox.com/s/9pw2h5zwy37mkd5/ap.jive.you.know.what.they.say.mp3"],
      [/#nobrains/i, "https://dl.dropbox.com/s/utxzgky2i3obluw/ap.jive.got.no.brains.mp3"],
      [/#bigmomma/i, "https://dl.dropbox.com/s/m9h3dov1t59w3a6/ap.jive.big.momma.mp3"],
      [/#canthang/i, "https://dl.dropbox.com/s/lnvftnllbk9i397/ap.jive.cant.hang.mp3"],
      [/#cutmesomeslack/i, "https://dl.dropbox.com/s/yuve2zrmpkeju94/ap.jive.cut.me.some.slack.mp3"],
      [/#ispeakjive/i, "https://dl.dropbox.com/s/xxa078binp2w9xh/ap.jive.i.speak.jive.mp3"],
      [/#surely/i, "https://dl.dropbox.com/s/09arfb7of2zu9qy/ap.surely.mp3"],

      // gijoe
      [/#wth/i, "https://dl.dropbox.com/s/c9fob2ycdvfzmzs/gipsa.bm.ehhhh.what.the.hell.mp3"],
      [/#go/i, "https://dl.dropbox.com/s/rzita4po56g9p4w/gipsa.bm.go.mp3"],
      [/#bodymassage/i, "https://dl.dropbox.com/s/3a3qfizvib17dro/gipsa.bm.who.wants.a.body.massage.mp3"],
      [/#hellno/i, "https://dl.dropbox.com/s/9a018kotphwboz0/gipsa.compy.hell.no.whats.up.dog.mp3"],
      [/#idontknow/i, "https://dl.dropbox.com/s/nh6334poddfqqeh/gipsa.compy.i.dont.know.much.about.computers.mp3"],
      [/#stopdown/i, "https://dl.dropbox.com/s/3ezu7fzl0amkme5/gipsa.compy.stop.all.downloading.mp3"],
      [/#smellgood/i, "https://dl.dropbox.com/s/g1miu3nu1j2zrvd/gipsa.pcs.my.god.smelled.good.mp3"],
      [/#pcs/i, "https://dl.dropbox.com/s/klmzj0j56sm011s/gipsa.pcs.pork.chop.sandwiches.mp3"],
      [/#yeahdo/i, "https://dl.dropbox.com/s/8ihum9ulgcjeo3q/gipsa.pcs.yeah.do.mp3"],
      [/#younotcookin/i, "https://dl.dropbox.com/s/25cylv37aagvqgw/gipsa.pcs.you.not.cooking.mp3"],

      // napoleon dynamite
      [/#lucky/i, "https://dl.dropbox.com/s/lkmsbrb61th41ep/nap.lucky.mp3"],
      [/#idiot/i, "https://dl.dropbox.com/s/num2xiri6z3yrot/nap.Freakin.Idiot.mp3"],
      [/#mountain/i, "https://dl.dropbox.com/s/9s9wt7tztyhc6o2/nap.themmountains.mp3"],
      [/college/i, "https://dl.dropbox.com/s/3k9nssr8irkeduy/nap.your.mom.goes.to.college.mp3"],

      // misc
      [/#snoopylaf/i, "https://dl.dropbox.com/s/d9rbzlhb00ems07/snooplaf.wav"],
      [/#binladen/i, "https://dl.dropbox.com/s/1cubsnsrekgk97r/Thanks_A_Lot%2C_Bin_Laden%21_-_.mp3"],
      [/#whahappen/i, "https://dl.dropbox.com/s/mxyhtpga5tj7n1l/hwh.hey.wha.happen.mp3"],
      [/#badthings/i, "https://dl.dropbox.com/s/x1y09c430wsj2s6/Latarian_Fun_To_Do_Bad_Things_-_.mp3"],
      [/#cigs/i, "https://dl.dropbox.com/s/86zft7pfuror25y/Latarian_Smokes_Wif_Cigarettes_-_.mp3"],
      [/#die/i, "https://dl.dropbox.com/s/e6h8ut56og70pog/Die%21_-_.mp3"],
      [/#nobs/i, "https://dl.dropbox.com/s/o5m0ny2kd49i3wj/Don%27t_Need_Your_BS%21%21%21_-_.mp3"],
      [/bieber/i, "https://dl.dropbox.com/s/mw8cpr6nrv8mmxm/beiber.sobleep.mp3"],
      [/#zackly/i, "https://dl.dropbox.com/s/1s2qs9aa38w78r1/emmitt.h.zackly.mp3"],
      [/#poopoo/i, "https://dl.dropbox.com/s/ku3p4aywjirv63q/emmitt-d.poopoo2.mp3"],
      [/#flyingmonkey/i, "https://dl.dropbox.com/s/rxe3mal9v1v2tat/flying.monkey.what.is.he.going.to.say.mp3"],
      [/nosense/i, "https://dl.dropbox.com/s/zhcw7c66i97hcq3/obro.thatdontmakenosense.mp3"],

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
      [/#inconc..vable/i, "https://dl.dropbox.com/s/a0yu8dah8f5zetj/inconceivable.mp3"],
      [/#thatword/i, "https://dl.dropbox.com/s/0gqo74p78856dvf/thatword.mp3"],
      [/\binconc..vable\b/i, "https://dl.dropbox.com/s/0gqo74p78856dvf/thatword.mp3"],
      [/#sumup/i, "https://dl.dropbox.com/s/3j0oxph6oh30tft/sumup.mp3"]
    ];
  } else {
    this.library = library;
  }

}

DropMachine.prototype = {
  matchMessage:function (messages) {
    for (var i = 0; i < this.library.length; i++) {
      for (var j = 0; j < messages.length; j++) {
        var ary = this.library[i];
        var regex = ary[0];
        var url = ary[1];
        var message = messages[j];
        if (message.bodyElement().innerText.match(regex)) {
          return url;
        }
      }
    }
    return null;
  }
}

Campfire.DropMachine = Class.create({
  initialize:function (chat) {
    this.chat = chat;
    this.dropMachine = new DropMachine();
  },

  onMessagesInserted:function (messages) {
    var url = this.dropMachine.matchMessage(messages);
    if (url != null) {
      var audio = new Audio(url);
      audio.play();
    }
  }
});

Campfire.Responders.push("DropMachine");
window.chat.installPropaneResponder("DropMachine", "dropmachine");