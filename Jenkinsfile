def getBranchName(){
  return scm.branches[0].name
}

pipeline {
  agent any 

  tools { 
    nodejs "nodejs-16.20"
  }
  
  environment {   
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
        }
      }
    }

    stage("Installation") {
      steps { 
        sh "node -v"
        sh "npm install -f"
      }
    }

    stage("Build And Push Image") {
      environment {
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        DOCKER_IMAGE = "react-template" 
        BRANCH_NAME = getBranchName()
      }

      steps { 
        script {
          try {
            echo "Branch name is : ${BRANCH_NAME}"
            if(BRANCH_NAME == "*/main" || BRANCH_NAME == "*/master") {
              withCredentials([usernamePassword(credentialsId: "docker-hub", usernameVariable: "DOCKER_USERNAME", passwordVariable: "DOCKER_PASSWORD")]){
                sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
                sh "docker build -t ${DOCKER_USERNAME}/${DOCKER_IMAGE}:${DOCKER_TAG} ."
                sh "docker tag ${DOCKER_USERNAME}/${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_USERNAME}/${DOCKER_IMAGE}:latest"
                sh "docker images | grep ${DOCKER_IMAGE}"
                sh "docker push ${DOCKER_USERNAME}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker push ${DOCKER_USERNAME}/${DOCKER_IMAGE}:latest"
                sh "docker rmi -f ${DOCKER_USERNAME}/${DOCKER_IMAGE}:${DOCKER_TAG}"
                sh "docker rmi -f ${DOCKER_USERNAME}/${DOCKER_IMAGE}:latest"
              }
              buildSuccess = true
            }else {
              buildSuccess = false
            }           
          }catch(error){
            throw error; 
          }
        }
      }
    }
        
    stage("Desploy to Kubernetes") {
      steps { 
        script { 
          kubernetesDeploy(configs: "deployment.yml", kubeconfigId: "kubernetes")
        }
      }
    }
  }

  post {
    success {
      echo "Build Success Completely"
    }
    failure { 
      echo "Build Failed."
    }
  }
}