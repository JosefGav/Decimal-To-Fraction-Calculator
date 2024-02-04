The sum of a geometric series for n terms is as follows:
![equation](https://latex.codecogs.com/svg.latex?S_{n}=a\cdot%20r^0+a\cdot%20r^1+...%20+%20a\cdot%20r^{n-1})

Can be expressed as:
![equation](https://latex.codecogs.com/svg.latex?S_{n}=%20\frac{a\cdot(r^n-1)}{r-1})

For \( |r| < 1 \), 
![equation](https://latex.codecogs.com/svg.latex?\lim_{n%20\to%20\infty}%20S_{n}=%20\frac{a\cdot%20(0-1)}{r-1}=%20\frac{-a}{r-1})

We can use this formula to calculate any repeating decimal (e.g., \(0.356 \overline{15}\)) by expressing it as a geometric progression as follows:
![equation](https://latex.codecogs.com/svg.latex?%5Cbegin{align*}S_{n}%20&=%200.356+0.00015+0.0000015+0.000000015+0.00000000015%20...%20\\&=%200.356%20+%20\frac{0.00015}{1}(\frac{1}{100}^0+%20\frac{1}{100}^1+%20\frac{1}{100}^2+...+\frac{1}{100}^{n-1})%20\\&=%200.356%20+%20\frac{3}{20000}(\frac{1}{100}^0+%20\frac{1}{100}^1+%20\frac{1}{100}^2+...+\frac{1}{100}^{n-1})%20\\%5Cend{align*})

![equation](https://latex.codecogs.com/svg.latex?%5Cbegin{align*}S_{\infty}%20&=%20\frac{-a}{r-1}%20+%200.356%20\\&=%20\frac{-\frac{3}{20000}}{\frac{1}{100}-1}%20+%20\frac{356}{1000}%20\\&=%20\frac{1}{6600}%20+%20\frac{356}{1000}%20\\&=%20\frac{1%20\cdot%205%20+%2033%20\cdot%20356%20}{33000}%20\\&=%20\frac{11753}{3300}%20\\%5Cend{align*})
