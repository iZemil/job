# Explain the pros and cons for CSS animations vs JS animations?

Regarding optimization and responsiveness the debate bounces back and forth but, the concept is:

- CSS animations allows the browser to choose where the animation processing is done, CPU or the GPU. (Central or Graphics Processing Unit)
- That said, adding many layers to a document will eventually have a performance hit.
- JS animation means more code for the user to download and for the developer to maintain.
- Applying multiple animation types on an element is harder with CSS since all transforming power is in one property transform
- CSS animations being declarative are not programmable therefore limited in capability.