def getBranchName(){
  return scm.branches[0].name
}

pipeline {
  agent any 

  tools { 
    nodejs "nodejs-16.20"
  }
  
  environment {
    builderUser = ""
    dockerImage = ""
    dockerImageName = "react-template" 
    buildSuccess = false
  }

  stages { 
    stage("Checkout") {
      steps {
        checkout scm
      }
    }

    stage("Environment") {
      environment {
        BRANCH_NAME = getBranchName()
      }
      steps {
        script { 
          sh "git --version"
          echo "branch name: ${BRANCH_NAME}"
          sh "docker --version"
          sh "printenv"
          wrap([$class : "BuildUser"]) {
            buildUser = env.BUILD_USER_ID + "-" + env.BUILD_USER
          }
          echo "build User is : ${buildUser}"
        }
      }
    }

    stage("Installation") {
      steps { 
        sh "node -v"
        sh "npm install"
      }
    }
    
  }
}