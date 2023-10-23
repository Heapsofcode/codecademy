const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const randomStrainReturn = (strain) => {
  const randomStrains = ['A', 'T', 'C', 'G'];
  const availableOptions = randomStrains.filter((item) => item != strain);
  return availableOptions[Math.floor(Math.random() * availableOptions.length)];
}


const pAequorFactoy = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randomStrain = Math.floor(Math.random() * 15);
      const expr = this.dna[randomStrain];
      const newRandomStrain = randomStrainReturn(expr);
      this.dna[randomStrain] = newRandomStrain;
      return this.dna;
    },
    compareDNA(pObj) {
      let matchingDna = 0
      for (let i = 0; i < pObj.dna.length; i++) {
        for (let d = 0; d < this.dna.length; d++) {
          if (pObj.dna[i] === this.dna[d] && i === d) {
            matchingDna++;
        }
       }
      }
      matchingDna / 15 * 100
    },
    willLikelySurvive() {
      let cAndGFilter = this.dna.filter((strand) => strand === 'C' || strand === 'G');
      return cAndGFilter.length >= 9 ? true : false;
    }
  }
}

let passedPObjs = []
for (let i = 0; passedPObjs.length < 30; i++) {
  const pObj = pAequorFactoy(i, mockUpStrand());
  if (pObj.willLikelySurvive()) {
    passedPObjs.push(pObj);
  }
}