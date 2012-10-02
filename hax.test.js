Class = {
  create:function () {
  }
}

Campfire = {
}

Campfire.Responders = {
  push:function () {
  }
}

chat = {
  installPropaneResponder:function () {
  }
}

function FauxBodyElement(text) {
  this.innerText = text;
}

function FauxMessage(text) {
  this.element = new FauxBodyElement(text);
}

FauxMessage.prototype = {
  bodyElement: function() {
    return this.element;
  }
}

describe("DropMachine", function () {
  describe("matchMessages()", function() {
    it("returns url on first match", function () {
      var library = [
        [/foo/, 'foo.mp3']
      ]
      var machine = new DropMachine(library);
      expect(machine.matchMessage([new FauxMessage('foo')])).toEqual(['foo.mp3']);
      // called twice to ensure rotation code doesn't screw up singles
      expect(machine.matchMessage([new FauxMessage('foo')])).toEqual(['foo.mp3']);
    }),

    it("returns null on no match", function () {
      var library = [
        [/foo/, 'foo.mp3']
      ]
      var machine = new DropMachine(library);
      var url = machine.matchMessage([new FauxMessage('bar')]);
      expect(url).toEqual([]);
    }),

    it("cycles through array of sounds on same match", function() {
      var library = [
        [/foo/, ['bar.mp3', 'quux.mp3']]
      ]
      var machine = new DropMachine(library);
      expect(machine.matchMessage([new FauxMessage('foo')])).toEqual(['bar.mp3']);
      expect(machine.matchMessage([new FauxMessage('foo')])).toEqual(['quux.mp3']);
      expect(machine.matchMessage([new FauxMessage('foo')])).toEqual(['bar.mp3']);
    }),

    it("match all on a line", function() {
      var machine = new DropMachine([[/foo/, 'foo.mp3'], [/bar/, 'bar.mp3']]);
      expect(machine.matchMessage([new FauxMessage('foo bar')])).toEqual(['foo.mp3', 'bar.mp3']);
    })
  })
});