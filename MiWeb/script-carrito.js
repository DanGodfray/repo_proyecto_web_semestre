let cart = [];

        // Función para agregar productos al carrito
        function addToCart(button) {
            const productElement = button.parentElement;
            const productName = productElement.querySelector('h4').innerText;
            const productPrice = parseInt(productElement.querySelector('h6').innerText.replace('Precio: $', ''));
            
            const product = {
                name: productName,
                price: productPrice
            };
            cart.push(product);
            updateCart();
        }

        // Función para actualizar el contenido del carrito
        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    ${item.name} - $${item.price}
                    <button id="btn-oscuro" style="margin-top: auto;" onclick="removeFromCart(${index})">Eliminar</button>
                `;
                cartItems.appendChild(cartItem);
                total += item.price;
            });

            document.getElementById('cart-total').innerText = total;
        }

        // Función para eliminar productos del carrito
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        // Función para vaciar el carrito
        function clearCart() {
            cart = [];
            updateCart();
        }

        // Mostrar/Ocultar el carrito al hacer clic en el botón del carrito
        document.getElementById('cart-button').addEventListener('click', () => {
            const cartElement = document.getElementById('cart');
            cartElement.style.display = cartElement.style.display === 'none' ? 'block' : 'none';
        });