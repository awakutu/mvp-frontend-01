pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''echo Build
'''
      }
    }

    stage('Backend') {
      parallel {
        stage('Unit') {
          steps {
            sh 'echo Backend'
          }
        }

        stage('Performance') {
          steps {
            sh 'echo Unit'
          }
        }

      }
    }

    stage('Frontend') {
      steps {
        sh 'echo Frontend'
      }
    }

    stage('Static Analysis') {
      steps {
        sh 'echo Static'
      }
    }

    stage('Deploy') {
      steps {
        sh 'echo Deploy'
      }
    }

  }
}