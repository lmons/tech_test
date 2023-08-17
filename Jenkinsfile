
pipeline {
  agent any
    
  tools {nodejs "node 16"}
    
  stages {
        
    stage('Git') {
      steps {
        checkout scmGit(
    branches: [[name: 'main']],
    userRemoteConfigs: [[url: 'https://github.com/lmons/tech_test']])
      }
    }
     
    stage('Build') {
      steps {
        sh 'yarn install'
      }
    }  

   
            
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
  }
}
