
pipeline {
  agent any
    
  tools {nodejs "node 16"}
    
  stages {
        
    stage('Git') {
      steps {
        git clone 'https://github.com/lmons/tech_test'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm build'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}
