const options = [
     {
          id: 1,
          disabled: false,
          row_id: 0
     },
     {
          id: 2,
          disabled: false,
          row_id: 0
     },
     {
          id: 3,
          disabled: false,
          row_id: 0
     },
     {
          id: 4,
          disabled: false,
          row_id: 0
     }
]

export default [
     {
          row: [
                    {
                         keywords: ['Autoconfiante', 'Independente', 'Dominante'],
                         name: 'd1',
                         options: options
                    },
                    {
                         keywords: ['Comunicativo', 'Alegre', 'Extrovertido'],
                         name: 'i1',
                         options: options
                    },
                    {
                         keywords: ['Acolhedor', 'Amigável', 'Paciente'],
                         name: 's1',
                         options: options
                    },
                    {
                         keywords: ['Autodisciplinado', 'Atento a detalhes', 'Diligente'],
                         name: 'c1',
                         options: options
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ['Pró-ativo', 'Empreendedor', 'Corajoso'],
                         name: 'd2',
                         options: options.map((option) => {return {...option, row_id: 1}})
                    },
                    {
                         keywords: ['Participativo', 'Relacional', 'Flexível'],
                         name: 'i2',
                         options: options.map((option) => {return {...option, row_id: 1}})
                    },
                    {
                         keywords: ['Agradável', 'Tranquilo', 'Organizado'],
                         name: 's2',
                         options: options.map((option) => {return {...option, row_id: 1}})
                    },
                    {
                         keywords: ['Criterioso', 'Cuidadoso', 'Especialista'],
                         name: 'c2',
                         options: options.map((option) => {return {...option, row_id: 1}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ['Prático', 'Rápido', 'Eficiente'],
                         name: 'd3',
                         options: options.map((option) => {return {...option, row_id: 2}})
                    },
                    {
                         keywords: ['Persuasivo', 'Contagiante', 'Estimulante'],
                         name: 'i3',
                         options: options.map((option) => {return {...option, row_id: 2}}) 
                    },
                    {
                         keywords: ['Calmo', 'Rotineiro', 'Constante'],
                         name: 's3',
                         options: options.map((option) => {return {...option, row_id: 2}})
                         
                    },
                    {
                         keywords: ['Idealizador', 'Perfeccionista', 'Uniforme'],
                         name: 'c3',
                         options: options.map((option) => {return {...option, row_id: 2}})
                         
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ['Objetivo', 'Assertivo', 'Focado em Resultados'],
                         name: 'd4',
                         options: options.map((option) => {return {...option, row_id: 3}})
                    },
                    {
                         keywords: ['Preza pelo prazer', 'Emotivo', 'Divertido'],
                         name: 'i4',
                         options: options.map((option) => {return {...option, row_id: 3}})
                    },
                    {
                         keywords: ['Conciliador', 'Conselheiro', 'Bom ouvinte'],
                         name: 's4',
                         options: options.map((option) => {return {...option, row_id: 3}})
                    },
                    {
                         keywords: ['Conforme', 'Sistemático', 'Sensato'],
                         name: 'c4',
                         options: options.map((option) => {return {...option, row_id: 3}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ["Determinados", "Firme", "Enérgico"],
                         name: 'd5',
                         options: options.map((option) => {return {...option, row_id: 4}})
                    },
                    {
                         keywords: ["Criativo", "Falante", "Distraído"],
                         name: 'i5',
                         options: options.map((option) => {return {...option, row_id: 4}})
                    },
                    {
                         keywords: ['Comedido', 'Amável', 'Mediador'],
                         name: 's5',
                         options: options.map((option) => {return {...option, row_id: 4}})
                    },
                    {
                         keywords: ['Preciso', 'Lógico', 'Racional'],
                         name: 'c5',
                         options: options.map((option) => {return {...option, row_id: 4}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ["Lutador", "Combativo", "Agressivo"],
                         name: 'd6',
                         options: options.map((option) => {return {...option, row_id: 5}})
                    },
                    {
                         keywords: ["Participativo", "Facilitador", "Influenciador"],
                         name: 'i6',
                         options: options.map((option) => {return {...option, row_id: 5}})
                    },
                    {
                         keywords: ['Auto-controlado', 'Conservador', 'Responsável'],
                         name: 's6',
                         options: options.map((option) => {return {...option, row_id: 5}})
                    },
                    {
                         keywords: ['Profundo', 'Perceptivo', 'Estratégico'],
                         name: 'c6',
                         options: options.map((option) => {return {...option, row_id: 5}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ["Automotivado", "Pioneiro", "Impulsionador"],
                         name: 'd7',
                         options: options.map((option) => {return {...option, row_id: 6}})
                    },
                    {
                         keywords: ["Articulador", "Empolgante", "Motivador"],
                         name: 'i7',
                         options: options.map((option) => {return {...option, row_id: 6}})
                    },
                    {
                         keywords: ['Persistente', 'Prevenido', 'Tolerante'],
                         name: 's7',
                         options: options.map((option) => {return {...option, row_id: 6}})
                    },
                    {
                         keywords: ['Exato', 'Exigente', 'Estruturado'],
                         name: 'c7',
                         options: options.map((option) => {return {...option, row_id: 6}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ["Resolvedor", "Destemido", "Desafiador"],
                         name: 'd8',
                         options: options.map((option) => {return {...option, row_id: 7}})
                    },
                    {
                         keywords: ["Vaidoso", "Simpático", "Gosta de ser reconhecido"],
                         name: 'i8',
                         options: options.map((option) => {return {...option, row_id: 7}})
                    },
                    {
                         keywords: ["Aconselhador", "Harmônico", "Apoiador"],
                         name: 's8',
                         options: options.map((option) => {return {...option, row_id: 7}})
                    },
                    {
                         keywords: ["Ponderado", "Ordenador", "Analisador"],
                         name: 'c8',
                         options: options.map((option) => {return {...option, row_id: 7}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ["Competitivo", "Assume riscos", "Desbravador"],
                         name: 'd9',
                         options: options.map((option) => {return {...option, row_id: 8}})
                    },
                    {
                         keywords: ["Entusiasmado", "Impulsivo", "Otimista"],
                         name: 'i9',
                         options: options.map((option) => {return {...option, row_id: 8}})
                    },
                    {
                         keywords: ["Moderado", "Equilibrado", "Estável"],
                         name: 's9',
                         options: options.map((option) => {return {...option, row_id: 8}})
                    },
                    {
                         keywords: ["Teórico", "Conservador", "Aprofunda Conhecimentos"],
                         name: 'c9',
                         options: options.map((option) => {return {...option, row_id: 8}})
                    },
               ]
     },
     {
          row: [
                    {
                         keywords: ["Direcionador", "Solucionador", "Empreendedor"],
                         name: 'd10',
                         options: options.map((option) => {return {...option, row_id: 9}})
                    },
                    {
                         keywords: [ "Agregador", "Sociabilidade", "Mobilidade"],
                         name: 'i10',
                         options: options.map((option) => {return {...option, row_id: 9}})
                    },
                    {
                         keywords: ["Conciliador", "Observador", "Diplomata"],
                         name: 's10',
                         options: options.map((option) => {return {...option, row_id: 9}})
                    },
                    {
                         keywords: ["Regulador", "Especialista", "Orientador"],
                         name: 'c10',
                         options: options.map((option) => {return {...option, row_id: 9}})
                    },
               ]
     },
]