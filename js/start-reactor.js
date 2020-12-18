startReactor = {

    computerCombination: [],
    playerCombination: [],
    computerCombinationPosition: 1,
    combinationMaxPosition: 5,
    memoryMaxCombination: 9,

    audio: {
        start: 'start.mp3',
        fail: 'fail.mp3',
        complete: 'complete.mp3',
        combination: ['0.mp3', '1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3' ],

        loadAudio(filename) {
            const file = `./audio/${filename}?cb=${new Date().getTime()}`
            const audio = new Audio(file)
            audio.load()
            return audio
        },

        loadAudios() {
            if (typeof(startReactor.audio.start ) == "object") return 

            startReactor.audio.start = startReactor.audio.loadAudio(startReactor.audio.start)
            startReactor.audio.complete = startReactor.audio.loadAudio(startReactor.audio.complete)
            startReactor.audio.fail = startReactor.audio.loadAudio(startReactor.audio.fail)
            startReactor.audio.combination = startReactor.audio.combination.map( audio => this.start.audio.loadAudio(audio))
        } 
    },

    interface: {

        memoryPanel: document.querySelector(".painelMemory"),
        computerPanel: document.querySelector(".computerLedPanel"),
        playerLedPanel: document.querySelector(".playerLedPanel"),
        playerMemory: document.querySelector(".playerMemory"),
        playerMemoryButtons: document.getElementsByClassName("player_memory"),

        turnLedOn(index, ledPanel) {
            ledPanel.children[index].classList.add("ledOn");
    },

    load() { },
    start() { 
        startReactor.computerCombination = startReactor.createCombination()
        startReactor.computerCombinationPosition = 1
        startReactor.playerCombination = []
    },

    createCombination() {
        let newCombination = []
        for (let n = 0; n < startReactor.combinationMaxPosition; n++) {
            const position = Math.floor(Math.random() * startReactor.memoryMaxCombination + 1)
            newCombination.push(position - 1)
        }
        return newCombination
    }
}