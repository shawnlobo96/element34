properties(
  [disableConcurrentBuilds(), 
  parameters(
    [
        string(defaultValue: 'localhost', description: 'IP/Hostname of Selenium Server', name: 'HUB_HOST', trim: true), 
        string(defaultValue: '1', description: 'Number of workers to run the test to support parallel execution', name: 'MAX_INSTANCES', trim: true), 
        text(defaultValue: '''[
  {
    "browserName": "chrome",
    "wdio:enforceWebDriverClassic": true
  },
  {
    "browserName": "firefox",
    "wdio:enforceWebDriverClassic": true
  }
] ''', description: 'capabilities JSON string', name: 'CAPABILITIES')])])

pipeline {
    agent any
    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/shawnlobo96/element34.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                 sh "npm i"
            }
        }
        stage('Run Test') {
            steps {
                script {
                    def trimmedCapabilities = params.CAPABILITIES.trim()
                    sh """
                        export HUB_HOST=${params.HUB_HOST}
                        export MAX_INSTANCES=${params.MAX_INSTANCES}
                        export CAPABILITIES='${trimmedCapabilities}'
                        npm run test
                    """
                }
            }
        }
    }
    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}