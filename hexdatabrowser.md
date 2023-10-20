---
title: Blue Neuron
layout: hexdata
permalink: "/hexdatabrowser/"
---

<div class="container-lg p-responsive" style="display:grid;">
  <div class="test" style="align: center">
  	</br>
  	</br>
    <div class="float-left">
      <img class="d-block pr-4" style="width: 360px;" alt="FedRAMP Logo" src="{{"/assets/img/soc-brilliance.png" | relative_url}}">
    </div>
    <div class="overflow-hidden">
			<h1>BG3 Hex & Data Browser</h1><br>

	    <div id="corefilters">
	    <!-- Dropdown for types -->
	    <select id="typeDropdown" disabled>
	        <option value="" disabled selected>Type</option>
	        <!-- Other options will be populated by JavaScript -->
	    </select>

	    <!-- Search box -->
	    <input type="text" id="searchBox" placeholder="Search by Display Name">
	    </div>

	    <!-- Checkboxes -->
	    <b>Boolean filters</b>
	    <div id="checkboxes">
	        <!-- Checkboxes will be populated by JavaScript -->
	    </div>

	    <!-- Multiselect dropdown for keys -->
	    <b>Properties to display (CTRL + Click for multi-select)</b>
	    <select multiple id="keyDropdown" disabled>
	        <!-- Options will be populated by JavaScript -->
	    </select>

	    <!-- Search Button -->
	    <button id="searchButton" disabled>Search</button>

	    </br>

	    <!-- Loading sign -->
	    <div id="loading" style="display:none;">Loading...</div>

	    </br>

	    <!-- Area to display filtered entries -->
	    <div id="entries">
	        <!-- Entries will be populated by JavaScript -->
	    </div>

	    </div>
    </div>

  </div>
</div>