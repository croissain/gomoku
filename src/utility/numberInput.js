import $ from "jquery";

$(function () {
  $("input").keydown(function () {
    // Save old value.
    if (
      !$(this).val() ||
      (parseInt($(this).val()) <= 11 && parseInt($(this).val()) >= 0)
    )
      $(this).data("old", $(this).val());
  });
  $("input").keyup(function () {
    // Check correct, else revert back to old value.
    if (
      !$(this).val() ||
      (parseInt($(this).val()) <= 11 && parseInt($(this).val()) >= 0)
    );
    else $(this).val($(this).data("old"));
  });
});
