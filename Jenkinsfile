
pipeline {
  agent any
    
  tools {nodejs "node 16"}
  parameters {
        booleanParam(name: 'executeTests', defaultValue: true, description: '', CI=true)
    }
    
  stages {
        
   
    
    stage('Prepare') {
      steps{
        sh "npm install --legacy-peer-deps --force"
      }
    }
     
    

   
            
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}
