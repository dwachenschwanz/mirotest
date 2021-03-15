const icon =
  '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>';

  const iconsq =
    '<rect x="2" y="2" width="9" height="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></rect>';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "Board cleaner",
        svgIcon: iconsq,
        onClick: async () => {
          // Show modal and wait for user choice
          let needToClear = confirm("Do you want delete all content?");

          if (needToClear) {
            // Get all board objects
            let objects = await miro.board.widgets.get();

            // Delete all board objects
            await miro.board.widgets.deleteById(
              objects.map((object) => object.id)
            );

            // Display success
            miro.showNotification("Content has been deleted");
          }
        },
      },
    },
  });
});
