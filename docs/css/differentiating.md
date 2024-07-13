## Differentiating Portrait and Landscape Orientation

Get the orientation using:

```tsx
const orientation = useAppSelector(selectOrientation);
```

## Differentiating CSS Styles for Mobile Portrait, Mobile Landscape, and Desktop

First, import the CSS module:

```tsx
import styles from './styles.module.scss';
```

Get the prefix className for the device:

```tsx
const deviceClassName = DisplayHelper.getDeviceClassName(styles);
```

Add the className to the component.

**Example:**

```tsx
<div className={`${styles['chip-deck']}${deviceClassName}`}>...</div>
```

In the CSS module, use the following prefixes:

### Mobile Portrait

```scss
.chip-deck {
    // global styles for all devices
}

.mobile-portrait {
    &.chip-deck {
        // styles for mobile portrait
    }
}

.mobile-landscape {
    &.chip-deck {
        // styles for mobile landscape
    }
}

.desktop {
    &.chip-deck {
        // styles for desktop
    }
}
```
