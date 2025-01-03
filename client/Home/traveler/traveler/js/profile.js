     function openModal() {
            document.getElementById('editModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('editModal').style.display = 'none';
        }

        function saveChanges() {
            // Example: Save changes (you can extend this with real functionality)
            alert('Changes saved!');
            closeModal();
        }