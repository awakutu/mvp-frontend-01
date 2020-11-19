pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''Echo Build
'''
      }
    }

    stage('Backend') {
      parallel {
        stage('Unit') {
          steps {
            sh 'Echo Backend'
          }
        }

        stage('Performance') {
          steps {
            sh 'Echo Unit'
          }
        }

      }
    }

    stage('Frontend') {
      steps {
        sh 'Echo Frontend'
      }
    }

    stage('Static Analysis') {
      steps {
        sh 'Echo Static'
      }
    }

    stage('Deploy') {
      steps {
        sh 'Echo Deploy'
      }
    }

  }
}