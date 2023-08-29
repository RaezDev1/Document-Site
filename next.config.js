function multipleLinks(destination, ...sources){
  const results = [];
  for(const source of sources){
    results.push({
      source,
      destination,
      permanent: true
    });
  }

  return results;
}

module.exports = {
    async redirects() {
      return [
        ...multipleLinks("https://discord.gg/PZXCymwFPV", '/discord', '/support'),
        ...multipleLinks("https://github.com/RaezDev1/Document-Site", '/github'),

      ]
    },
  }