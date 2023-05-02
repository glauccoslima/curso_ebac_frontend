module.exports = function (grunt) {
    // Inicialização da configuração do Grunt
    grunt.initConfig({
        // Lê o arquivo package.json
        pkg: grunt.file.readJSON('package.json'),

        // Configuração da tarefa LESS
        less: {
            // Configuração para ambiente de desenvolvimento
            development: {
                files: {
                    // Compila o arquivo main.less para main.css na pasta 'dev/styles'
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            // Configuração para ambiente de produção
            production: {
                options: {
                    // Comprime o CSS para economizar espaço
                    compress: true,
                },
                files: {
                    // Compila e comprime o arquivo main.less para main.min.css na pasta 'dist/styles'
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        // Configuração da tarefa de observação de arquivos (watch)
        watch: {
            // Observa mudanças nos arquivos .less
            less: {
                files: ['src/styles/**/*.less'],
                // Executa a tarefa 'less:development' quando detecta mudanças
                tasks: ['less:development']
            },
            // Observa mudanças no arquivo index.html
            html: {
                files: ['src/index.html'],
                // Executa a tarefa 'replace:dev' quando detecta mudanças
                tasks: ['replace:dev']
            }
        },
        // Configuração da tarefa de substituição de texto (replace)
        replace: {
            // Configuração para ambiente de desenvolvimento
            dev: {
                options: {
                    patterns: [
                        // Substitui 'ENDERECO_DO_CSS' por './styles/main.css'
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        // Substitui 'ENDERECO_DO_JS' por '../src/scripts/main.js'
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        // Substitui o texto no arquivo 'src/index.html'
                        src: ['src/index.html'],
                        // Salva o arquivo substituído na pasta 'dev'
                        dest: 'dev/'
                    }
                ]
            },
            // Configuração para ambiente de produção
            dist: {
                options: {
                    patterns: [
                        // Substitui 'ENDERECO_DO_CSS' por './styles/main.min.css'
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        // Substitui 'ENDERECO_DO_JS' por './scripts/main.min.js'
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        // Substitui o texto no arquivo 'prebuild/index.html'
                        src: ['prebuild/index.html'],
                        // Salva o arquivo substituído na pasta 'dist'
                        dest: 'dist/'
                    }
                ]
            }
        },
        // Configuração da tarefa de minificação de HTML (htmlmin)
        htmlmin: {
            dist: {
                options: {
                    // Remove comentários do HTML
                    removeComments: true,
                    // Remove espaços em branco do HTML
                    collapseWhitespace: true,
                },
                files: {
                    // Minifica 'src/index.html' e salva como 'prebuild/index.html'
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        // Configuração da tarefa de limpeza (clean)
        clean: [
            // Apaga a pasta 'prebuild'
            'prebuild'
        ],
        // Configuração da tarefa de minificação de JavaScript (uglify)
        uglify: {
            target: {
                files: {
                    // Minifica 'src/scripts/main.js' e salva como 'dist/scripts/main.min.js'
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    // Carrega as tarefas do Grunt a partir de módulos npm
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registra a tarefa 'default', que será executada quando o Grunt for iniciado sem especificar uma tarefa
    grunt.registerTask('default', ['watch']);

    // Registra a tarefa 'build', que executa uma série de tarefas em sequência para preparar o projeto para a produção
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify']);
}
