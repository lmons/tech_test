
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
    
    stage('Prepare') {
      steps{
        sh "npm install -g yarn"
        sh "yarn install"
      }
    }
     
    stage('Build') {
      steps {
        sh 'yarn dev'
      }
    }  

   
            
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
  }
}
