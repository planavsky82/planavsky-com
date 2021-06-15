# power-login



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type     | Default           |
| ------------------- | --------------------- | ----------- | -------- | ----------------- |
| `labelEmailAddress` | `label-email-address` |             | `string` | `"Email Address"` |
| `labelPassword`     | `label-password`      |             | `string` | `"Password"`      |


## Events

| Event         | Description | Type                      |
| ------------- | ----------- | ------------------------- |
| `submitLogin` |             | `CustomEvent<LoginEvent>` |


## Dependencies

### Depends on

- [power-error](../power-error)
- [power-button](../power-button)

### Graph
```mermaid
graph TD;
  power-login --> power-error
  power-login --> power-button
  style power-login fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
