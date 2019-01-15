<?php

    session_start();

    $project_folders = scandir('./projects');
    array_splice($project_folders, 0, 2);

    function project_Body($project_folders) {
        $project = '';

        for($i=0; $i<count($project_folders); $i++)
        {
            //get project description
            $description = file_get_contents("./projects/".$project_folders[$i]."/description.txt");

            //get project tech
            $tech = file_get_contents("./projects/".$project_folders[$i]."/tech.txt");

            //get project link
            $p_link = $project_folders[$i] == 'jannidesigned' ? file_get_contents("./projects/".$project_folders[$i]."/link.txt") : './projects/'.file_get_contents("./projects/".$project_folders[$i]."/link.txt");
            // $p_link = file_get_contents("./projects/".$project_folders[$i]."/link.txt");

            $tech_item = explode(',', $tech);
            $item = '';
            $btn_background = "url(./projects/".$project_folders[$i]."/banner.png) no-repeat center";

            for($items=0; $items<count($tech_item); $items++)
            {
                $item .= "<span>".$tech_item[$items]."</span>";
            }


            $project .= "<div class='row align-items-center h-100 project' id='".$project_folders[$i]."'>
                <div class='col-12 col-lg-6 project-column project-column-left'>
                    <div class='row'>
                        <p class='pro-letter d-lg-none p-item'>".$project_folders[$i][0]."</p>
                        <p class='pro-name col-12 col-sm-6 p-item'>".$project_folders[$i]."</p>
                        <p class='pro-wrap col-12 col-sm-6 p-item'>".$description."</p>
                        <p class='pro-tech col-12 col-sm-6 p-item'>".$item."</p>
                        <a href='".$p_link."' target='_blank' ><button class='btn p-item' style='background: ".$btn_background."'>View Project</button></a>
                    </div>
                </div>

                <div class='col-12 col-lg-6 d-none d-lg-block project-column project-column-right h-100'>
                    <div class='row h-100'>
                        <img src='./projects/".$project_folders[$i]."/banner.png' class='img-fluid' />
                    </div>
                </div>
            </div>";
        }
        print_r($project);
    }




    function project_List($project_folders) {

        for($i=0; $i<count($project_folders); $i++)
        {
            if($i==0)
            {
                $active = 'active';
            }
            else
            {
                $active = '';
            }


            $list = "<li class='nav-item'>
                        <a class='nav-link ".$active."' href='#".$project_folders[$i]."'>".$project_folders[$i][0]."<span class='rest-title'>".str_replace($project_folders[$i][0],'',$project_folders[$i])."</span></a>
                    </li>";

            print_r($list);
        }

    }

?>
