/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  let out = [];

  for (let val of cpdomains) {
    let [number, domain] = val.split(" ");
    number = parseInt(number);
    let domainArray = domain.split(".");
    for (let i = 0; i < domainArray.length; i++) {
      let joinString = domainArray.slice(i, domainArray.length).join(".");
      if (!map.has(joinString)) {
        map.set(joinString, number);
      } else {
        const val = map.get(joinString);
        map.set(joinString, val + number);
      }
    }
  }

  map.forEach((value, key) => {
    out.push(`${value} ${key}`);
  });

  return out;
};

subdomainVisits([
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org"
]); //?
