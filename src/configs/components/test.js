[
    {
      "name": "HouseSell_id",
      "x": {{query_list.data.HouseSell_name}},
      "y": {{query_list.data['HouseSell_id']}},
      "type": "bar",
      "hovertemplate": "<b>%{x}</b><br>%{fullData.name}: %{y}<extra></extra>",
      "transforms": [
        {
          "type": "groupby",
          "groups": {{query_list.data['HouseSell_name']}},
          "styles": [
            {
              "target": {{_.uniq(query_list.data['HouseSell_name'])[0]}},
              "value": {
                "marker": {
                  "color": "#033663"
                }
              }
            },
            {
              "target": {{_.uniq(query_list.data['HouseSell_name'])[1]}},
              "value": {
                "marker": {
                  "color": "#247BC7"
                }
              }
            },
            {
              "target": {{_.uniq(query_list.data['HouseSell_name'])[2]}},
              "value": {
                "marker": {
                  "color": "#55A1E3"
                }
              }
            }
          ]
        },
        {
          "type": "sort",
          "target": {{query_list.data.HouseSell_name}},
          "order": "ascending"
        },
        {
          "type": "aggregate",
          "groups": {{query_list.data.HouseSell_name}},
          "aggregations": [
            {
              "target": "y",
              "func": "sum",
              "enabled": true
            }
          ]
        }
      ]
    }
  ]