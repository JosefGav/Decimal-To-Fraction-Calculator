The sum of a geometric series for n terms is as follows:
$$ S_{n}=a\cdot r^0+a\cdot r^1+... + a\cdot r^{n-1}   $$
Can be expressed as :
$$ S_{n}= \frac{ a \cdot(r^n-1)} {r-1}$$
For \( |r| < 1 \), 
$$
\begin{align}
\lim_{x \to \infty} S_{n} &= \frac{a \cdot (0-1)}{r-1} \\
&= \frac{-a}{r-1}
\end{align}
$$
We can use this formula to calculate any repeating decimal (ex. \(0.356 \overline{15}\)) by expressing it as a geometric progression as follows:
$$
\begin{align}
S_{n} &= 0.356+ 0.00015+ 0.0000015 +  0.000000015 + 0.00000000015 ... \\
&= 0.356+ 0.00015+ 0.0000015 +  0.000000015 + 0.00000000015 ...\\
&= 0.356 + \frac{0.00015}{1}(\frac{1}{100}^0+ \frac{1}{100}^1+ \frac{1}{100}^2+...+\frac{1}{100}^{n-1}) \\
&= 0.356 + \frac{3}{20000}(\frac{1}{100}^0+ \frac{1}{100}^1+ \frac{1}{100}^2+...+\frac{1}{100}^{n-1}) \\
\end{align}
$$
$$
\begin{align}
S_{\infty} &= \frac{-a}{r-1} + 0.356\\
&= \frac{-\frac{3}{20000}}{\frac{1}{100}-1} + \frac{356}{1000}\\
& = \frac{1}{6600} + \frac{356}{1000}\\
&= \frac{1 \cdot 5 + 33 \cdot 356 }{33000}\\
&= \frac{11753}{3300}
\end{align}
$$
