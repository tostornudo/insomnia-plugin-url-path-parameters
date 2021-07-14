# Insomnia URL Parameters Plugin

This is a plugin for [Insomnia](https://insomnia.rest) that automatically replaces URL href property
parameters with values defined in the Query tab by the same name.

## Usage

1. Add placeholders to url: (eg. `*https://tostornudo.crm.dynamics.com/api/data/v9.0/:entity?$filter=:field eq :field_value*`)
2. Add matching entries to Query tab (eg. *`:entity`, `:field`,  `:field_value`*)

![image](https://user-images.githubusercontent.com/24818929/125686702-7e11a82f-2c97-4e22-8125-05bfa0cefe4f.jpg)

The final URL will be

***"https://tostornudo.crm.dynamics.com/api/data/v9.0/accounts?filter=accountid eq 344a4072-d7e4-eb11-bacb-000d3a8ef5ec"***

## Disclaimer

The [original](https://github.com/gschier/insomnia-plugin-path-parameters/blob/master/index.js) plugins only allows to replace parameters on the URL path


