<div class='container-portfolio h-100'>

    <div class='project-nav h-100 d-none d-lg-block'>
        <ul class="nav flex-column">
            <?php project_List($project_folders); ?>
        </ul>
    </div>

    <div class='container-fluid h-100 project-house'>

        <?php project_Body($project_folders); ?>

    </div>

    <p class='lead text-center d-lg-none' style='position: absolute; width:100%; bottom: -2px'><strong>Swipe up to see more projects</strong></p>

</div>
