# power-signup



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description | Type     | Default               |
| ------------------- | --------------------- | ----------- | -------- | --------------------- |
| `labelEmailAddress` | `label-email-address` |             | `string` | `"Email Address"`     |
| `labelPassword1`    | `label-password-1`    |             | `string` | `"Password"`          |
| `labelPassword2`    | `label-password-2`    |             | `string` | `"Re-Enter Password"` |


## Events

| Event          | Description | Type                       |
| -------------- | ----------- | -------------------------- |
| `submitSignup` |             | `CustomEvent<SignUpEvent>` |


## Dependencies

### Depends on

- [power-button](../power-button)

### Graph
```mermaid
graph TD;
  power-signup --> power-button
  style power-signup fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
