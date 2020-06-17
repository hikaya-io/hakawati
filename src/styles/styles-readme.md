# Color palette

|  | Color | Hex | Fill | | Hex |
|--|--|--|--|--|--|
| ![#4B3EF9](https://placehold.it/20/4B3EF9/000000?text=+) | $primary-color | `#4B3EF9` | ![#F0F0FF](https://placehold.it/20/F0F0FF/000000?text=+) | $primary-fill |`#F0F0FF`|
| ![#6633FF](https://placehold.it/20/6633FF/000000?text=+) | $primary-color-sub | `#6633FF` | ![#F0EBFA](https://placehold.it/20/F0EBFA/000000?text=+)  | $primary-color-sub-fill |`#F0EBFA` |
| ![#33CCCC](https://placehold.it/20/33CCCC/000000?text=+) | $secondary-color | `#33CCCC` | ![#E6FFFC](https://placehold.it/20/E6FFFC/000000?text=+) | $secondary-color-fill |`#E6FFFC` | 
![#00CC66](https://placehold.it/20/00CC66/000000?text=+) | $success-color | `#00CC66` | ![#E5FAF0](https://placehold.it/20/E5FAF0/000000?text=+) | $success-fill | `#E5FAF0` | 
![#FF3333](https://placehold.it/20/FF3333/000000?text=+) | $danger-color| `#FF3333` | ![#FFEBEB](https://placehold.it/20/FFEBEB/000000?text=+) | $danger-fill | `#FFEBEB` |
![#F9C80E](https://placehold.it/20/F9C80E/000000?text=+) | $warning-color| `#F9C80E` | ![#FEF9E7](https://placehold.it/20/FEF9E7/000000?text=+) | $warning-fill | `#FEF9E7` |
![#6633CC](https://placehold.it/20/6633CC/000000?text=+) | $guest-color| `#6633CC` | ![#F5EBFA](https://placehold.it/20/F5EBFA/000000?text=+) | $guest-color-fill | `#F5EBFA` |
![#666666](https://placehold.it/20/666666/000000?text=+) | $heading-grey| `#666666` | ![#F4F5FC](https://placehold.it/20/F4F5FC/000000?text=+) | $background-color | `#F4F5FC` |
![#333333](https://placehold.it/20/333333/000000?text=+) | $dark-body-grey| `#333333` | ![#CCCCCC](https://placehold.it/20/CCCCCC/000000?text=+) | $light-body-grey | `#CCCCCC` |
![#737581](https://placehold.it/20/737581/000000?text=+) | $info-color | `#737581` | 


# Typography

<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap" rel="stylesheet">


<span style="font-family:Lato; font-size:26px; font-weight:400;">We use Lato for title and body.</span>

#### Link

```
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
```

#### CSS

```
$main-font-family: 'Lato', san-serif;
```

## Font classes

#### Title - Lato B48
```
.title {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  color: $dark-body-grey;
}
```


####  Heading - Lato B35
```
.heading {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 42px;
  color: $heading-grey;
}
```

#### Body Bold - Lato B18
```
.body-bold {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: $dark-body-grey;
}
```

#### Body 3 Bold - Lato B22
```
.body-3-bold {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  color: $dark-body-grey;
}
```
#### Body Reg - Lato R18
```
.body-reg {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: $dark-body-grey;
}
```
#### Body 3 Reg - Lato R22
```
.body-3-reg {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: $dark-body-grey;
}
```
#### Footer - Lato R15
```
.footer {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: $dark-body-grey;
}
```

#### Info - Lato R11
```
.info {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: $info-color;
}
```

## Other font classes
```
.plain-style {
  font-family: $main-font-family;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
```
```
.ws-button {
  color: $primary-color;
  font-family: $main-font-family;
}
```
```
.button-style {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  border-color: transparent;
  padding: 11px 33px;
  color: $white;
}
```
```
.h-border {
  border-radius: 5px;
}
```
```
.card-shadow {
  background: #FFFFFF;
  box-shadow: 0px 0px 17px rgba(115, 117, 129, 0.25);
  // border-radius: 20px;
}
```
```
.button-pill {
  width: 110px;
  border-radius: 25px;

  .el-checkbox-button__inner {
    border-radius: 25px !important;
    border-color: transparent;
  }
}
```