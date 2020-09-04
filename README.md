## Puppeteer CEP
API de consulta ao CEP dos correios via Puppeteer

## Variáveis de ambiente
CRiar um arquivo .env com as seguintes variáveis de ambiente
``` env
HEADLESS=true
HTTP_PORT=3000
NODE_ENV=development
EXECUTABLE_PATH=/usr/bin/google-chrome
```

## Output
`http://0.0.0.0:3000/cep/query/itaguara`

```json
[
  "Logradouro/Nome:Bairro/Distrito:Localidade/UF:CEP:",
  "Rua Itaguara Cidade Nova Manaus/AM 69097-128",
  "Beco Itaguara Átila de Paiva (Barreiro) Belo Horizonte/MG 30640-433",
  "Rua Itaguara Colégio Batista Belo Horizonte/MG 31110-240",
  "Rua Itaguara Vila Espírito Santo Divinópolis/MG 35500-260",
  "Rua Itaguara Residencial Lajinha (Parque Durval de Barros) Ibirité/MG 32430-380",
  "Rua Itaguara Colina da Praia Itabira/MG 35900-336",
  "Rua Itaguara Jardim Colônia (Colônia do Marçal) São João Del Rei/MG 36302-408",
  "Rua Itaguara Pau Amarelo Paulista/PE 53423-790",
  "Rua Itaguara Engenho do Meio Recife/PE 50730-550",
  "Rua Itaguara Loteamento Dona Amanda Foz do Iguaçu/PR 85853-735",
  "Rua Itaguara Neópolis Natal/RN 59088-140",
  "Viela Itaguara Cidade Industrial Satélite de São Paulo Guarulhos/SP 07222-013",
  "Rua Itaguara Cidade Vargas São Paulo/SP 04320-120",
  "Travessa João Lima, 20"
]
```
