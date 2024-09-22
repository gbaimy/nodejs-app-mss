const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.80.187.20:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'squ_e2237ad77934d4fe7f6be147c53819acb1079580',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'4.7.0.2747',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
