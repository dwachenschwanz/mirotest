const icon =
  '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>';

  const iconsq =
    '<ellipse cx="12" cy="12" rx="9" ry="5" fill="none" fill-rule="evenodd" stroke="red" stroke-width="2"></ellipse>';

miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: {
        title: "My Board cleaner",
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
