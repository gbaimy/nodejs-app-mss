const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.token': 'squ_e2237ad77934d4fe7f6be147c53819acb1079580',
	    'sonar.token': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.test': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
