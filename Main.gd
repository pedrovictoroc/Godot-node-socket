extends Spatial

onready var label = $CanvasLayer/Control/Label

onready var socket = PacketPeerUDP.new()

func _ready():
	socket.set_dest_address("127.0.0.1",8080)
	socket.put_packet("teste".to_ascii())
	
func _process(delta):

	if(socket.get_available_packet_count() > 0):
		var data = socket.get_packet().get_string_from_ascii()
		print(data)
